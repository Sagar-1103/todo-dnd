import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const Task = ({ id, title }) => {

    const {attributes,listeners,setNodeRef,transform,transition} = useSortable({id});

    const style = {
        transition,
        transform:CSS.Transform.toString(transform)
    }

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="bg-green-700 flex text-white rounded-md py-2 pl-5 text-start mx-auto w-[95%] my-3 align-middle ">
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox bg-gray-300 mr-5"
          />
          <span className="label-text font-semibold text-[15px] font-sans text-white">{title}</span>
        </label>
      </div>
    </div>
  );
};

export default Task;
