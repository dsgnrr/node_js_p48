import z from "zod";
import { moduleSchema } from "./schemas/moduleSchema.js";
import type { ModuleFormData } from "./schemas/moduleSchema.js";


const course:ModuleFormData = {
    title: 'C+',
    description: 'C++ better than Python',
    level: 'advanced',
    durationHours: 12,
    isPublished: true
}

const result = moduleSchema.safeParse(course);
if(!result.success) console.log(result.error)
console.log(result);