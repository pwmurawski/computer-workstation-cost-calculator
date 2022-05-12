/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useContext } from "react";
import { ListContainer, ListItemContainer } from "./styles/ListStyles";
import ListHeader from "../../components/List/ListHeader/ListHeader";
import ListItem from "./ListItem/ListItem";
import { IListItemData } from "../../reducer";
import ReducerContext from "../../context/ReducerContext";

interface IListProps {
  listItemData: IListItemData[];
  reff: React.RefObject<HTMLUListElement>;
}

export default function List({ listItemData, reff }: IListProps) {
  const reducerCon = useContext(ReducerContext);

  const onDragEnd = (param: DropResult) => {
    const srcI = param.source.index;
    const desI = param.destination?.index;
    const newList = listItemData;

    if (newList) {
      newList.splice(desI ?? 0, 0, newList.splice(srcI, 1)[0]);
      reducerCon?.dispatch({ type: "setListItemData", listItemData: newList });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListContainer ref={reff}>
        <ListHeader />
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {listItemData.map(({ id, name, desc, price, category }, idx) => (
                <Draggable key={id} draggableId={`draggable-${id}`} index={idx}>
                  {(prov, snapshot) => (
                    <ListItemContainer
                      ref={prov.innerRef}
                      {...prov.draggableProps}
                      {...prov.dragHandleProps}
                      style={{
                        ...prov.draggableProps.style,
                        boxShadow: snapshot.isDragging
                          ? "0 0 5px black"
                          : "none",
                      }}
                    >
                      <ListItem
                        id={id}
                        name={name}
                        desc={desc}
                        price={price}
                        category={category}
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
