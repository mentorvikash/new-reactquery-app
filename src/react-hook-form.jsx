import "./styles.css";
import { useForm } from "react-hook-form";
 
export default function App() {
 
 const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) =>{
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                 <label>person-name</label>
                <input {...register("personname", {required: "person name is not present" })}
                 aria-invalid={errors.personname ? "true" : "false"} 
                 />
                 {errors.personname && <p style={{color: 'red'}} role="alert">{errors.personname.message}</p>}
                </div>
                <div>
                <label>age</label>
                <input {...register("age", { min: 18, max: 25 })} 
                 aria-invalid={errors.firstName ? "true" : "false"} 
                />
                {errors.age && <p style={{color: 'red'}} role="alert">{errors.age.message}</p>}
                </div>
                <div>
                <label>adderess</label>
                <input {...register("adderess")} />
                </div>
                <div>
                <label>streetAdderess</label>
                <input {...register("streetAdderess")} />
                </div>
                <div>
                <label>adderessline2</label>
                <input {...register("adderessline2")} />
                </div>
                <div>
                <label>state</label>
                <input {...register("state")} />                
                </div>
                <div>
                <input type="submit" />
                </div>
            </form>
    </div>
  );
}
