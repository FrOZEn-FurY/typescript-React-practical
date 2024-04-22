import ReminderComponent from './reminder';
import Reminder from '../models/reminderModel';
import { useState } from 'react';

const Reminders = () => {
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    return (
        <>
          <div className='bg-secondary p-3'>
            <form onSubmit={handleAddReminder} className=''>
              <div className='input-group'>
                  <span className='input-group-text bg-dark text-white'><label htmlFor='title'>Title: </label></span>
                  <input value={title} onChange={handleChange} type="text" id='title' className="form-control" aria-label="Title" aria-describedby="basic-addon1"/>
                  <span className='input-group-text bg-dark text-white'><label htmlFor='description'>Description: </label></span>
                  <input value={desc} onChange={handleChange} type="text" id='description' className="form-control" aria-label="Description" aria-describedby="basic-addon1"/>
                  <button type="submit" className="btn btn-dark">Add</button>
              </div>
            </form>
          </div>
          <hr/>
          <div className="container-fluid">
            <ReminderComponent items={reminders} />
          </div>
        </>
      );
    function handleAddReminder(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newReminder: Reminder = {
          id: Math.floor(Math.random() * 10000000),
          title,
          description: desc,
          isDone: Math.random() <= 0.5 ? true: false,
        };
        setTitle('');
        setDesc('');
        setReminders([...reminders, newReminder]);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (event.target.id === 'title') {
        setTitle(event.target.value);
      } else {
        setDesc(event.target.value);
      }
    }
}
 
export default Reminders;