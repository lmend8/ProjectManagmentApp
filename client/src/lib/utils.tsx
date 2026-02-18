export const dataGridSxStyles = (isDarkMode: boolean) => ({
  "& .MuiDataGrid-columnHeaders": {
    color: isDarkMode ? "#e5e7eb" : undefined,
    '& [role="row"] > *': {
      backgroundColor: isDarkMode ? "#1d1f21" : "#ffffff",
      borderColor: isDarkMode ? "#2d3135" : "#e5e7eb",
    },
  },

  "& .MuiIconButton-root": {
    color: isDarkMode ? "#a3a3a3" : undefined,
  },

  "& .MuiTablePagination-root": {
    color: isDarkMode ? "#a3a3a3" : undefined,
  },

  "& .MuiTablePagination-selectIcon": {
    color: isDarkMode ? "#a3a3a3" : undefined,
  },

  "& .MuiDataGrid-cell": {
    border: "none",
  },

  "& .MuiDataGrid-row": {
    borderBottom: `1px solid ${
      isDarkMode ? "#2d3135" : "#e5e7eb"
    }`,
  },

  "& .MuiDataGrid-withBorderColor": {
    borderColor: isDarkMode ? "#2d3135" : "#e5e7eb",
  },
});
