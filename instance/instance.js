import axios from "axios"

const instance = axios.create({
  baseURL: 'https://fe.dev.dxtr.asia/api',
  headers: { 
    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2I3YjIyMjlkZGU3ZWI3ZjI2OTI2NWQwOTVlZDYwZjQyNzlkYjFmMDhhNmZhZTJkNDM4Njk5Mjk3Njc0YjJjZWFiZjQ4ZTFjZjU2ODUwNTAiLCJpYXQiOjE2NjQzNDg1OTMsIm5iZiI6MTY2NDM0ODU5MywiZXhwIjoxNjk1ODg0NTkzLCJzdWIiOiI1NSIsInNjb3BlcyI6W119.IaiETViJ65eiorQoCdmHhw2Dq2YtjH3kcUCw2wfwAIe8YIhL11BJZG3CuANxWZn-2cIFUZh_D2SB3F6BsOKZ5yGU7Xq0nZPbH3eHrdPtFKGY6sLwM6xpV-VgL7RWGh1IhTG8l5K5V_HqIGwU_-Dl_jTfAYJxkrcAz3ZjDZx_Nbc4BjHm2C_GQA1WE7zdOFJEDKKxn0vLWR9DoE0QKe_x263tWOSSbi4Ubm7vChm0Ou3tsXC4FY7uDb_DDoX4iM0G_ZPZoeQuyXL7Ud63uACHKz9RamIBawxZEZbCyk8j7VTv8dIrfW7xvZvgpdD5xpg6zJNh-TWkz3T06QJwvR3nPYYul26DsMuolevdET7qLBY7nV6Xbc8piZpIyo5OqSTD-20QRA-AK59xFHKCjN07gB7flnJ_by9r0gYJixsk-kU__FvQjOP0HwuWKhS3S9d2RuX3RiRihwd1pAxGYa0gvHHo6sAhF8JrePlG-bAp83c2g9yCwy0eJO3MmDYnqK10QEpcO0wlie4W-KkN1BgMb3AHRQDUX9aP4U5f14GtADXc97i2qXKGLoVemH1A5A1R3XV_wJP_VooBlR-1YrSXH17d0EB_hGElRwQDsY__Kq7-stqUO1NbgdJ9e8pthc840uAfwR4yNRoSwZ0jR7_FfSWxZstRnVNJ4ocD93LbIi8"
   }
})

export const getCategory = async () => {
  let response = await instance.get('/category')
  if (response.status === 200){
    return response.data
  }
}


export const getDataProduct = async () => {
  let response = await instance.get('/products')
  if (response.status === 200){
    return response.data
  }
}