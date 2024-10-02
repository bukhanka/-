import React from 'react'

const Table = ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
  <table className="min-w-full divide-y divide-gray-200" {...props}>{children}</table>
)

const TableHeader = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className="bg-gray-50" {...props}>{children}</thead>
)

const TableBody = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className="bg-white divide-y divide-gray-200" {...props}>{children}</tbody>
)

const TableRow = ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr {...props}>{children}</tr>
)

const TableHead = ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props}>{children}</th>
)

const TableCell = ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className="px-6 py-4 whitespace-nowrap" {...props}>{children}</td>
)

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell }