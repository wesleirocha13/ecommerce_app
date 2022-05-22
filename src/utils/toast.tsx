import { Toast } from 'native-base'

export const showToastError = (message : string) =>{
  return Toast.show({
    title: message,
    backgroundColor: 'danger.500',
    height: '12',
    justifyContent: 'center'
  })
}
