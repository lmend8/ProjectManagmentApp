import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import { Task, useGetTasksQuery } from "@/state/api";
import React from "react";

type Props = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const ListView = ({ id, setIsModalNewTaskOpen }: Props) => {
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });
  if (isLoading)
    return <div className="text-gray-800 dark:text-gray-100">Loading...</div>;
  if (error) return <div>An error occurred while fetching tasks</div>;

  return (
    <div className="min-h-screen bg-gray-50 px-4 pb-8 xl:px-6 dark:bg-neutral-900">
      <div className="pt-5">
        <Header
          name="List"
          buttonComponent={
            <button
              className="bg-blue-primary flex items-center rounded bg-blue-600 px-3 py-2 text-white"
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              AddTask
            </button>
          }
          isSmallText
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {tasks?.map((task: Task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default ListView;
