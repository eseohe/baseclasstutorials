export const excelContent = {
  id: 'excel',
  title: 'Working with Excel (openpyxl, pandas)',
  duration: '40 minutes',
  objectives: [
    'Read and write Excel files with openpyxl',
    'Use pandas for Excel data processing',
    'Format cells and worksheets',
    'Handle multiple sheets'
  ],
  sections: [
    {
      type: 'overview',
      title: 'Excel Processing Libraries',
      content: `
Python offers several libraries for Excel manipulation:

- **openpyxl**: Read/write .xlsx files, supports formatting and formulas.
- **pandas**: High-level data analysis, easy Excel import/export.
- **xlsxwriter**: Fast, write-only, rich formatting.
`
    },
    {
      type: 'code',
      title: 'Basic Excel Write/Read (openpyxl)',
      code: `
# pip install openpyxl

from openpyxl import Workbook, load_workbook

# Create and write
wb = Workbook()
ws = wb.active
ws.title = "Sales"
ws.append(["Product", "Sales", "Profit"])
ws.append(["Laptop", 1200, 300])
ws.append(["Mouse", 25, 10])
wb.save('sales.xlsx')

# Read
wb = load_workbook('sales.xlsx')
ws = wb.active
for row in ws.iter_rows(values_only=True):
    print(row)
`
    },
    {
      type: 'text',
      content: `This example creates a workbook, writes a few rows, saves, then reads and prints each row. Use \`append()\` for simple row writing.`
    },
    {
      type: 'code',
      title: 'Formatting Cells',
      code: `
from openpyxl.styles import Font, PatternFill

wb = Workbook()
ws = wb.active
cell = ws['A1']
cell.value = "Header"
cell.font = Font(bold=True, color="FFFFFF")
cell.fill = PatternFill(start_color="366092", fill_type="solid")
wb.save('formatted.xlsx')
`
    },
    {
      type: 'text',
      content: `You can style cells with fonts and fills. Here, cell A1 is bold and colored.`
    },
    {
      type: 'code',
      title: 'Simple Pandas Excel Read/Write',
      code: `
# pip install pandas openpyxl

import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob'],
    'Sales': [100, 200]
})
df.to_excel('output.xlsx', index=False)

df2 = pd.read_excel('output.xlsx')
print(df2)
`
    },
    {
      type: 'text',
      content: `Pandas makes reading and writing Excel files easy. Use \`to_excel()\` and \`read_excel()\` for quick data exchange.`
    },
    {
      type: 'code',
      title: 'Multiple Sheets with Pandas',
      code: `
with pd.ExcelWriter('multi.xlsx', engine='openpyxl') as writer:
    df.to_excel(writer, sheet_name='Sheet1', index=False)
    df.to_excel(writer, sheet_name='Sheet2', index=False)
`
    },
    {
      type: 'text',
      content: `Use \`ExcelWriter\` to write multiple DataFrames to different sheets in one file.`
    },
    {
      type: 'code',
      title: 'Reading Specific Ranges',
      code: `
df = pd.read_excel('output.xlsx', usecols='A,B', nrows=2)
print(df)
`
    },
    {
      type: 'text',
      content: `You can read only certain columns and rows for efficiency.`
    },
    {
      type: 'code',
      title: 'Quick Data Cleaning Example',
      code: `
df = pd.read_excel('sales.xlsx')
df.dropna(inplace=True)
df['Sales'] = df['Sales'].astype(int)
print(df)
`
    },
    {
      type: 'text',
      content: `Drop missing rows and fix column types for clean analysis.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `
- Use pandas for large or complex data.
- Validate columns and types after reading.
- Use context managers to close files.
- For simple tasks, openpyxl is enough.
- For analysis, pandas is preferred.
`
    }
  ]
};