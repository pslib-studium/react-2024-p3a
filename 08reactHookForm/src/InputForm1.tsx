import { useForm } from "react-hook-form";

type Inputs = {
    firstName: string;
    lastName: string;
};

const InputForm1 = () => {
    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<Inputs>();
    const onSubmit = async (data: Inputs) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
        alert(JSON.stringify(data));
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("firstName", { required: true, minLength: 3 })} />
                {errors.firstName && (
                    <p role="alert">Povinná položka</p>
                )}
            </div>
            <input {...register("lastName")} />
            {isSubmitting && <p>Probíhá odesílání formuláře...</p>}
            <button type="submit" disabled={isSubmitting}>Odeslat</button>
        </form>
    );
    };

export default InputForm1;