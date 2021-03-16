import lecturers from "../../res/data/lecturers.json"

export default (req, res) => {
  res.status(200).json(lecturers)
}
