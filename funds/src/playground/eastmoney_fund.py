import pandas

df=pandas.read_json('./eastmoney_fundbase_data.json',encoding="utf-8")

print(df)