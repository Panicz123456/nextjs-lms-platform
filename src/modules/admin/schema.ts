import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseStatus = ["Draft", "Publish", "Archive"] as const;

export const courseCategories = [
  "Development",
  "Business",
  "Finance",
  "IT & Software",
  "Office productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Health & Fitness",
  "Music",
  "Teaching",
] as const;

export const createCourseSchema = z.object({
  title: z
    .string()
    .min(3, { error: "Title must be add least 3 characters" })
    .max(100, { error: "Title cant be longer then 100 character" }),
  description: z
    .string()
    .min(3, { error: "description must be add least 3 characters" })
    .max(250, { error: "Description cant be longer then 250 characters" }),
  fileKey: z.string().min(1, { error: "file key is required" }),
  price: z.number().min(1, { error: "Price is required" }),
  duration: z
    .number()
    .min(1, { error: "Duration must be 1 min " })
    .max(500, { error: "Duration must be to 500h" }),
  level: z.enum(["Beginner", "Intermediate", "Advanced"], {
    error: "Level is required",
  }),
  category: z.enum(courseCategories, { error: "Categories is required" }),
  smallDescription: z
    .string()
    .min(1, { error: "small Description must be at least 1 characters" })
    .max(100, {
      error: "small description cant be longer then 100 characters",
    }),
  slug: z.string().min(1, { message: "slug is required" }),
  status: z.enum(["Draft", "Published", "Archive"], {
    error: "Status is required",
  }),
});

export type createCourseSchemaType = z.infer<typeof createCourseSchema>;
