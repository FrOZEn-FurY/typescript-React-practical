import Reminder from "../models/reminderModel";

interface Reminders {
    items: Reminder[]
}

function ReminderComponent({items}: Reminders): JSX.Element {
    return (
        <>
            <ul className="list-group">
                {items.map((item) => {
                    if (!item.isDone) {
                        return  <li id={`${item.id}`} className="list-group-item bg-dark text-white" onMouseOver={handleListHover} onMouseOut={handleListUnhover} key={item.id}>{item.title} {item.description}</li>;
                    }
                    return  <li id={`${item.id}`} className="list-group-item bg-success text-white" onMouseOver={handleListHover} onMouseOut={handleListUnhover} key={item.id}>{item.title} {item.description}</li>;
                })}
            </ul>
        </>
    );

    function handleListUnhover(event: React.MouseEvent<HTMLLIElement>) {
        event.preventDefault();
        event.currentTarget.classList.remove("bg-warning", "text-dark");
        const index = items.findIndex((x) => x.id === parseInt(event.currentTarget.id));
        if(items[index].isDone === true) {
            event.currentTarget.classList.add("bg-success", "text-white");
        } else {
            event.currentTarget.classList.add("bg-dark", "text-white");
        }
    }

    function handleListHover(event: React.MouseEvent<HTMLLIElement>) {
        event.preventDefault();
        event.currentTarget.classList.remove("bg-dark", "bg-success", "text-white");
        event.currentTarget.classList.add("bg-warning", "text-dark");
    }
}

export default ReminderComponent;