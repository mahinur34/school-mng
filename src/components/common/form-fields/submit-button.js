import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useFormStatus } from 'react-dom'

export const SubmitButton = ({
    title,
    icon= "send",
    className="w-100",
    ...rest
}) => {

    const {pending} = useFormStatus(); 
    //useFormStatus : React DOM kütüphanesinden form gönderim durumunu izlemek için kullanılan bir kancayı(hook) içe aktarır.
    //burada useFormStatus bir pending(nesne) döndürür, pending form gönderiminin devam edip etmediğini gösteren bir boolean değeridir.
    //true ise gönderim devam ediyor demektir.
  return (
    <Button
    type="submit"
    className={className}
    size="lg"
    disabled={pending} 
    //pending değeri true ise, butonu devre dışı bırakır, 
    // bu durum kullanıcının form gönderimi devam ederken butona tekrar tıklamasını engeller.
    variant="secondary"
    >
      {pending ? (//pending true ise küçük bir yükleme göstergesi (spinner) görüntülenir.
        <Spinner size="sm" /> 
    ) : (

        <>
        {icon && <i className={`pi pi-${icon}`}></i>} &nbsp; 
        {title}
        </>
      )}
    </Button>
  )
};
