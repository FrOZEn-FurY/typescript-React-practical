import * as yup from 'yup';
import {useFormik} from 'formik';
import { useContext } from 'react';
import generalContext from '../contexts/generalContext';
import { useNavigate } from 'react-router-dom';

const NewTodo = () => {
    const context = useContext(generalContext);
    const navigate = useNavigate();
    let formik = useFormik({
        initialValues: {
            userId: context.dataValues.userId === -1 ? undefined : context.dataValues.userId,
            title: context.dataValues.title,
            completed: context.dataValues.completed
        },
        validationSchema: yup.object({
            userId: yup.number().required("This field is required."),
            title: yup.string().max(200, "Maximum number of characters: 200").required("This field is required."),
            completed: yup.boolean()
        }),
        onSubmit: (values) => {
            const data = {
                userId: values.userId,
                id: Math.floor(Math.random() * 10000000),
                title: values.title,
                completed: values.completed
            }
            context.handleAdd(data);
            navigate('/todos', { replace: true });
        }
    })

    return ( 
        <form onSubmit={formik.handleSubmit} className='bg-secondary p-2'>
            <div className="form-group">
                <label htmlFor="userId" className='form-label'>User ID: </label>
                <input
                    id="userId"
                    className="form-control w-50"
                    {...formik.getFieldProps('userId')}
                />
                {formik.touched.userId && formik.errors.userId ? (
                    <div className="text-danger">{formik.errors.userId}</div>
                ) : null}
                <label htmlFor="title" className='form-label mt-2'>Title: </label>
                <textarea
                    id="title"
                    className="form-control w-50"
                    {...formik.getFieldProps('title')}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div className="text-danger">{formik.errors.title}</div>
                ) : null}
                <label htmlFor="completed" className='form-check-label mt-2'>Completed: </label>
                <input
                    id="completed"
                    className="form-check-input ms-2"
                    style={{
                        marginTop: "12px"
                    }}
                    name='completed'
                    type="checkbox"
                    onChange={handleCheck}
                />
                {formik.touched.completed && formik.errors.completed ? (
                    <div className="text-danger">{formik.errors.completed}</div>
                ) : null}
            </div>
            <button type='submit' className='btn btn-outline-info mt-2'>Add</button>
        </form>
    );

    function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            formik.setFieldValue('completed', true);
        }
        else {
            formik.setFieldValue('completed', false);
        }
    }
}
 
export default NewTodo;