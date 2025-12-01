import pandas as pd

df = pd.read_excel("beneficiaries_2021.xlsx")
df.to_json("beneficiaries_2021.json", orient="records", indent=2)
