/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { ReactElement } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { ListContainer, ListItemContainer } from "./styles/ListStyles";
import ListItem from "./ListItem/ListItem";
import { IListItemData } from "../../reducer";

interface IListProps {
  listHeader?: ReactElement;
  listItemData: IListItemData[];
  deleteItemHandler: (id: string) => void;
  editItemHandler: (listItemNewData: IListItemData) => void;
  onDragEnd: (param: DropResult) => void;
  reff?: React.RefObject<HTMLUListElement> | null;
}

const defaultProps = {
  listHeader: undefined,
  reff: undefined,
};

export default function List({
  listHeader,
  listItemData,
  deleteItemHandler,
  editItemHandler,
  onDragEnd,
  reff,
}: IListProps) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListContainer ref={reff}>
        {listHeader}
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {listItemData.map(({ id, name, desc, price, category }, idx) => (
                <Draggable key={id} draggableId={`draggable-${id}`} index={idx}>
                  {(prov) => (
                    <ListItemContainer
                      ref={prov.innerRef}
                      {...prov.draggableProps}
                      {...prov.dragHandleProps}
                    >
                      <ListItem
                        id={id}
                        name={name}
                        desc={desc}
                        price={price}
                        category={category}
                        deleteItemHandler={deleteItemHandler}
                        editItemHandler={editItemHandler}
                      />
                    </ListItemContainer>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </ListContainer>
    </DragDropContext>
  );
}

List.defaultProps = defaultProps;
