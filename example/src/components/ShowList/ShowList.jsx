import {useState} from "react";
import Button from "../Button";

import {deepCopy} from "./deepCopy";

import {blocks} from "./blocks";

const ShowList = () => {
    const [elements, setElements] = useState(blocks);

    const showMore = () => {
        const newElements = elements.map(deepCopy);
        const idx = newElements.findIndex(({visible}) => visible === false);
        newElements[idx].visible = true;
        setElements(newElements)
    }

    const createElementList = (container, arr) => {
        const visisbleElemnts = arr.filter(({visible}) => visible);
        const Container = container;
        return <Container>{visisbleElemnts.map(createElement)}</Container>;
    }

    const createElement = ({props, component, id}) => {
        const Component = component;
        return <Component key={id} {...props} />
    }

    const visibleElements = elements.filter(({visible}) => visible);

    const elementList = visibleElements.map(item => {
        const {container, chidlren} = item;
        if(container) {
            return createElementList(container, chidlren);
        }
        return createElement(item);
    })

    // const {length: hideCount} = users.filter(({visible}) => !visible);
    return (
        <>
        <h2>Список людей</h2>
        {/* <ul>
            {peopleList}
        </ul> */}
        {/* {hideCount && <Button type="button" handleClick={showMore}>
            Показать еще
        </Button>} */}
        </>
    )
}

export default ShowList;