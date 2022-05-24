import { Toast } from 'native-base'

export const showToastError = (message : string) =>{
  return Toast.show({
    title: message,
    backgroundColor: 'danger.500',
    height: '12',
    justifyContent: 'center',
    duration: 2000
  })
}

export const showToastSuccess = (message : string) =>{
  return Toast.show({
    title: message,
    backgroundColor: 'green.500',
    height: '12',
    justifyContent: 'center',
    duration: 2000
  })
}
