import { FC, ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className?: string;
}

const Table: FC<TableProps> & {
  Header: FC<TableProps>;
  Body: FC<TableProps>;
  Row: FC<TableProps>;
} = ({ children, className }) => {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table
        className={`min-w-full text-sm text-left border-collapse ${
          className || ""
        }`}
      >
        {children}
      </table>
    </div>
  );
};

export default Table;

const TableHeader: FC<TableProps> = ({ children }) => {
  return (
    <thead>
      <tr className="title-row bg-secondary-100 text-secondary-700 text-xs sm:text-sm uppercase tracking-wider [&>th]:text-left">
        {children}
      </tr>
    </thead>
  );
};

const TableBody: FC<TableProps> = ({ children }) => {
  return <tbody className="divide-y divide-secondary-200">{children}</tbody>;
};

const TableRow: FC<TableProps> = ({ children }) => {
  return (
    <tr className="hover:bg-secondary-50 transition-colors duration-150 text-xs sm:text-sm whitespace-nowrap [&>td]:text-left">
      {children}
    </tr>
  );
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
