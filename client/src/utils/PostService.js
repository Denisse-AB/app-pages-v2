class PostService {
  static async insertAppointment (name, email, tel, date, selected, lang) {
    const res = {
      name, email, tel, date, selected, lang
    }
    return res
  }
}

export default PostService
