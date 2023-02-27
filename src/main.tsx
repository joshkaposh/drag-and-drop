import { Component, createSignal } from 'solid-js'
import { render } from 'solid-js/web'
import DragAndDrop, { DragEventType } from './DragAndDrop'
import './style.css'

const Counter: Component = () => {
    const [count, setCount] = createSignal(0)
    const increment = () => setCount(count() + 1)

    return <button type='button' onClick={increment}>{count()}</button>
}


const App = () => {
    const { Draggable, Droppable } = DragAndDrop;
    function onDragOver(e: DragEventType) {
        e.target.classList.add('hovered')
    }
    function onDragLeave(e: DragEventType) {
        e.target.classList.remove('hovered')
    }

    function onDrop(e: DragEventType) {
        e.target.classList.remove('hovered')
    }

    function shouldDrop(nodes: Element[]) {
        return nodes.length === 0 ? true : false
    }

    return <div id='app'>

        <div class='container'>
            <Droppable class='left'
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                shouldDrop={shouldDrop}
            >
                <Draggable id='draggable' >
                    <Counter />
                </Draggable>
            </Droppable>
            <Droppable
                class='right'
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                shouldDrop={shouldDrop}

            />
        </div>
        <div class='container'>
            <Droppable
                class='left'
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                shouldDrop={shouldDrop}

            />
            <Droppable
                class='right'
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                shouldDrop={shouldDrop}

            />
        </div>

    </div >
}

render(() => <App />, document.getElementById('root')!)

