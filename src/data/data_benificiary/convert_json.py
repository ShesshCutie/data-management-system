import pandas as pd
import os

def clean_datetime_columns(df):
    """
    Safely detect and convert datetime-like columns.
    Works even if column names are numbers or have mixed types.
    """

    # Convert all column names to strings
    df.columns = df.columns.map(str)

    for col in df.columns:
        col_lower = col.lower()

        # Only attempt conversion on datetime-like columns
        if (
            "date" in col_lower or
            "birth" in col_lower or
            "dob" in col_lower or
            df[col].dtype == "object" or
            str(df[col].dtype).startswith("datetime")
        ):
            try:
                df[col] = pd.to_datetime(df[col], errors="coerce")
            except:
                continue

            # Convert to ISO string format
            df[col] = df[col].astype("string")

    return df


def excel_to_json_sheets(excel_path, output_folder="json_output"):
    os.makedirs(output_folder, exist_ok=True)
    xls = pd.ExcelFile(excel_path)

    for sheet in xls.sheet_names:
        print(f"Processing sheet: {sheet}")

        # Load raw sheet (no header)
        df_raw = pd.read_excel(excel_path, sheet_name=sheet, header=None)

        # Detect header row automatically
        header_row = None
        for i in range(len(df_raw)):
            row = df_raw.iloc[i].astype(str)
            if (
                row.str.contains("NAME", case=False).any() or
                row.str.contains("REGION", case=False).any() or
                row.str.contains("SURNAME", case=False).any() or
                row.str.contains("FIRST", case=False).any()
            ):
                header_row = i
                break

        if header_row is None:
            # fallback: first row with at least 2 values
            for i in range(len(df_raw)):
                if df_raw.iloc[i].notna().sum() >= 2:
                    header_row = i
                    break

        # Load sheet with correct header
        df = pd.read_excel(excel_path, sheet_name=sheet, header=header_row)

        # Remove fully empty rows/columns
        df = df.dropna(axis=0, how="all").dropna(axis=1, how="all")

        # Convert column names to string
        df.columns = df.columns.map(str)

        # Clean datetime values
        df = clean_datetime_columns(df)

        # Save JSON output
        safe_name = sheet.replace(" ", "_").replace("/", "_")
        out_file = os.path.join(output_folder, f"{safe_name}.json")

        df.to_json(out_file, orient="records", indent=2)
        print(f"Saved: {out_file}")

    print("\nAll sheets exported successfully!")


# Run the function
excel_to_json_sheets("beneficiaries_2021.xlsx")
