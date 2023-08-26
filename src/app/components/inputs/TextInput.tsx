import FORM_STRINGS from "@/app/constants/strings/form-strings";
import { FormE } from "@/app/types/forms/form-type";
import { useField } from "formik";
import { FC } from "react";

const TextInput: FC<{
    name: FormE;
}> = (props) => {
    const name = props.name as unknown as string;

    const [field, meta, helpers] = useField(name);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name}>{FORM_STRINGS[props.name].label}</label>
            <input
                type="text"
                className="border-none outline-none bg-slate-100 p-2 rounded-md shadow-md w-full"
                name={name}
                id={name}
                onChange={field.onChange}
                value={field.value}
                placeholder={FORM_STRINGS[props.name].placeholder}
            />
        </div>
    );
};

export default TextInput;
