import { FormE } from "@/app/types/forms/form-type";

const FORM_STRINGS: Record<FormE, { label: string; placeholder: string }> = {
    [FormE.FullName]: {
        label: "نام و نام‌خانوادگی",
        placeholder: "نام و نام‌خانوادگی...",
    },
    [FormE.Email]: {
        label: "ایمیل",
        placeholder: "ایمیل...",
    },
    [FormE.PhoneNumber]: {
        label: "تلفن همراه",
        placeholder: "تلفن همراه...",
    },
    [FormE.Comment]: {
        label: "دیدگاه شما",
        placeholder: "دیدگاه شما...",
    },
};

export default FORM_STRINGS;
