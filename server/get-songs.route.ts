import {Request, Response} from 'express';
//import {COURSES} from "./db-data";
import {SONGS} from "./db-music";

// export function getAllCourses(req: Request, res: Response) {
//     res.status(200).json({payload:Object.values(COURSES)});
// }

export function getAllSongs(req: Request, res: Response) {
  res.status(200).json({payload:Object.values(SONGS)});
}

export function getSongsByDate(req: Request, res: Response ){
  const date = req.params["date"];

  const allSongs :any = Object.values(SONGS);

  const songsByDate = allSongs.find(song => {
      course.id == courseId);

  res.status(200).json(course);
}
export function getCourseById(req: Request, res: Response) {

    const courseId = req.params["id"];

    const courses:any = Object.values(COURSES);

    const course = courses.find(course => course.id == courseId);

    res.status(200).json(course);
}
