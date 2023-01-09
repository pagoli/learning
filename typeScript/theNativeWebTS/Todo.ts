import { Status } from "./Status";

interface Todo<TData> {
  id: string;
  description: string;
  status: Status;
  data: TData;
}

export { Todo };
