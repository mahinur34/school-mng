import React from 'react'
import { Spinner } from 'react-bootstrap';
import { useFormStatus } from 'react-dom'

export const SubmitButton = ({title, icon="send", className="w-100", ...rest}) => {

    const {pending} = useFormStatus();
  return (
   <Button type="submit"
   className={className}
   size="lg"
   disabled={pending}
   variant="secondary"
   {...rest}>
  {pending ? (
    <Spinner size="sm" /> 
) : (
    <>
     {icon&& <i className={`pi pi-${icon}`}></i>} &nbsp;
     {title}
         </>

  )}


   </Button>
  )
}
