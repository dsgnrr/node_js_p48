import z from "zod";
import { moduleSchema } from "./schemas/moduleSchema.js";
import type { ModuleFormData } from "./schemas/moduleSchema.js";


const course:ModuleFormData = {
    title: 'C#',
    description: 'C++ better than Python',
    level: 'advanced',
    durationHours: 1213123,
    isPublished: true
}

const result = moduleSchema.parse(course);
console.log(result);