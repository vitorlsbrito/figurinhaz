import { useState } from 'react';

import styled from 'styled-components';

const Content = (props) => {
    const { stickers, addSticker, removeSticker } = props;

    const [dateEvent, setDateEvent] = useState();

    const mouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setDateEvent(new Date());
    }

    const mouseUp = (event, id) => {
        event.preventDefault();
        event.stopPropagation();

        const date = new Date();

        if ((date - dateEvent) > 500) {
            removeSticker(id);
        } else {
            addSticker(id);
        }
    }

    const stopEvent = (event) => {
        if(event.preventDefault != undefined) {
            event.preventDefault();
        }
         
        if(event.stopPropagation != undefined) {
            event.stopPropagation();
        }
    }

    const groups = [...new Set(stickers.map(sticker => sticker.group))];

    return (
        <Container>
            { groups.map(group => (
                <Group key={ group }>
                    <GroupTitle>
                        <p>{ group }</p>
                    </GroupTitle>

                    <GroupStickers>
                        { stickers.map(sticker => {
                            if (sticker.group === group) {
                                return (
                                    <Sticker
                                        id={ sticker.id }
                                        key={ sticker.id }
                                        onMouseDown={ (e) => { mouseDown(e) }}
                                        onMouseUp={ (e) => { mouseUp(e, sticker.id) }}
                                        onContextMenu={ (e) => {
                                            stopEvent(e);
                                            mouseUp(e, sticker.id);
                                        }}
                                    >
                                        { sticker.name }
                                        <span>({ sticker.qty })</span>
                                    </Sticker>
                                )
                            }
                        })}
                    </GroupStickers>
                </Group>
            ))}

            <br />
            <br />
            <br />
        </Container>
    )
}

const Container = styled.div`
    padding: 0.5rem 1.0rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: scroll;
`;

const Group = styled.div`
    background: #FFF;
    width: 100%;
    height: auto;
    padding: 1.0rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
`;

const GroupTitle = styled.div`
    width: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: #333;
        font-weight: 600;
        white-space: nowrap;
        margin: 0;
        transform: rotate(-90deg);
    }
`;

const GroupStickers = styled.div`
    margin-left: 1.0rem;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
`;

const Sticker = styled.button`
    background: #EEE;
    width: 2.75rem;
    height: 3.5rem;
    border: solid 1px #CCC;
    border-radius: 0.2rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    span {
        font-size: 0.8rem;
        margin-top: 0.2rem;
    }
`;

export default Content;
