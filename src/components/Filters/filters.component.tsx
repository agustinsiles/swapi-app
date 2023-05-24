import { useState } from "react";
import { PlanetFields } from "../../models/planet";
import Dropdown from "../Dropdown/dropdown.component";

interface IProps {
  onSortByChange: (field: PlanetFields | "", order: Order) => void;
}

export enum Order {
  ASC = "asc",
  DESC = "desc",
}
export default function Filters({ onSortByChange }: IProps) {
  const sortFields = Object.values(PlanetFields);
  const [selectedField, setSelectedField] = useState<PlanetFields | "">("");
  const [selectedOrder, setSelectedOrder] = useState<Order>(Order.ASC);

  const handleFieldSelectionChange = (field: PlanetFields) => {
    onSortByChange(field, selectedOrder);
    // Example of side effects. This function will update the component's state
    setSelectedField(field);
  };

  const handleOrderSelectionChange = (order: Order) => {
    onSortByChange(selectedField, order);
    // Example of side effects. This function will update the component's state
    setSelectedOrder(order);
  };

  return (
    <header className="flex justify-between my-6 bg-yellow-200 p-6">
      <div>
        Sort by:{" "}
        <Dropdown
          id="sort"
          options={sortFields}
          value={selectedField}
          handleSelectionChange={(field) =>
            handleFieldSelectionChange(field as PlanetFields)
          }
        />
      </div>
      <div>
        Order:
        <Dropdown
          id="order"
          options={["asc", "desc"]}
          value={selectedOrder}
          handleSelectionChange={(field) =>
            handleOrderSelectionChange(field as Order)
          }
        />
      </div>
    </header>
  );
}
