import type React from "react"
import type { ModuleFormData } from "../schemas/moduleSchema.js";
import { moduleSchema } from "../schemas/moduleSchema.js";
import { useState } from "react";

const CoursePage:React.FC = ()=>{
    const [formData, setFormData] = useState({
        title:'',
        description:'',
        level: '',
        durationHours: '1',
        isPublished: false
    });
    const [errors, setErrors]= useState<Record<string, string>>({})
    return (
        <div></div>
    )
}

export default CoursePage;