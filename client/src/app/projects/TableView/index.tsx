import { useAppSelector } from "@/app/redux";
import Header from "@/components/Header";
import { useGetTasksQuery } from "@/state/api";
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { dataGridSxStyles } from "@/lib/utils";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";

type Props = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => (
      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
        {params.value}
      </span>
    ),
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 75,
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 130,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 130,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 130,
  },
  {
    field: "author",
    headerName: "Author",
    width: 150,
    renderCell: (params) => params.value.username || "Unknown",
  },
  {
    field: "assignee",
    headerName: "Assignee",
    width: 150,
    renderCell: (params) => params.value.username || "Unassigned",
  },
];

const TableView = ({ id, setIsModalNewTaskOpen }: Props) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode],
  );

  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading)
    return <div className="text-gray-600 dark:text-gray-300">Loading...</div>;
  if (error) return <div>An error occurred while fetching tasks</div>;

  return (
    <div className="h-[540px] w-full px-4 pb-8 text-gray-800 xl:px-6 dark:text-gray-200">
      <div className="pt-5">
        <Header name="Table" isSmallText />
      </div>
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={tasks || []}
          columns={columns}
          sx={{
            border: "none",
            color: theme.palette.mode === "dark" ? "#e5e7eb" : "#1f2937",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#1f2937" : "#f9fafb",
              color: theme.palette.mode === "dark" ? "#f9fafb" : "#111827",
              borderBottom: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid",
              borderColor:
                theme.palette.mode === "dark" ? "#374151" : "#e5e7eb",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#1f2937" : "#f3f4f6",
            },
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default TableView;
