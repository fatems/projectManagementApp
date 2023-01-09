import { createSlice } from "@reduxjs/toolkit";

const projectsInitialState = [
  {
    id: "p1",
    projectName: "پروژه A",
    projectManager: ["دکتر محمد صادق رضایی"],
    teamMates: ["teammate A", "teammate B"],
    managerAssistant: ["Person C"],
    startDate: "08/20/2022 06:13 AM",
    dueDate: "09/20/2022 06:13 AM",
    hashtags: ["مدیریت پروژه", "مدیریت کار ها", "پروژه"],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه  .و متخصصان را می طلبد",
    files: ["file1", "file2"],
  },
  {
    id: "p2",
    projectName: "پروژه B",
    projectManager: ["دکتر محمد صادق رضایی"],
    teamMates: ["teammate A", "teammate B"],
    managerAssistant: ["Person C"],
    startDate: "08/20/2022 06:13 AM",
    dueDate: "09/20/2022 06:13 AM",
    hashtags: ["مدیریت پروژه", "مدیریت کار ها", "پروژه"],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه  .و متخصصان را می طلبد",
    files: [],
  },

  {
    id: "p3",
    projectName: "پروژه C",
    projectManager: ["دکتر محمد صادق رضایی"],
    teamMates: ["teammate A", "teammate B"],
    managerAssistant: ["Person C"],
    startDate: "08/20/2022 06:13 AM",
    dueDate: "09/20/2022 06:13 AM",
    hashtags: ["مدیریت پروژه", "مدیریت کار ها", "پروژه"],
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه  .و متخصصان را می طلبد",
    // files: [],
    // boards: ["برد تست"],
  },
];

// createSlice() lets you write immutable updates using “mutation-like” logic within the case reducers. This is because createSlice() uses the Immer library internally to turn mutating code into immutable updates.

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: projectsInitialState,
  },
  reducers: {
    setProjects: (state, action) => {
      //is this approach immutable or mutable by looks tho .-.
      // return { ...state, projects: [...action.payload] };
      return (state.projects = action.payload);
    },
    newProject: (state, action) => { state.projects.push(action.payload) },
    editProject: (state, action) => {
      const projects = state.projects.map((project) => {
        if (project.id === action.payload.id) {
          project = action.payload;
        }
        return projects;
      });
      return (state.projects = projects);
    },
    deleteProject: (state, action) => {
      const projects = state.projects.filter(
        (project) => project.id !== action.payload.id
      );
      // return { ...state, projects: [...projects] };
      state.projects = projects;
    },
  },
});

export const { setProjects, newProject, editProject, deleteProject } =
  projectsSlice.actions;

export default projectsSlice.reducer;
