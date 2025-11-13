import pandas as pd

df = pd.read_excel("beneficiaries_2025.xlsx")
df.to_json("beneficiaries_2025.json", orient="records", indent=2)
