import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GlobalApi from '../../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
function AddResume() {
    const[openDialog, setOpenDialog] = useState(false);
    const[resumeTitle, setResumeTitlt] = useState();
    const navigation = useNavigate();
    const{user} = useUser();
    const[loading, setLoading] = useState(false);
    const onCreate = async()=>
    {
        setLoading(true);
        const uuid = uuidv4();
        const data = {
            data:{
                title:resumeTitle,
                resumeid:uuid, 
                useremail:user ?.primaryEmailAddress?.emailAddress,
                username:user?.fullName
            }
        }



        GlobalApi.CreateNewResume(data).then(res=>{
            if(res)
                {
                    setLoading(false);
                    navigation('/dashboard/resume/'+uuid+"/edit")

                }
        }, (error)=>
            {
                setLoading(false);
            })
    }

    return (
        <div>
            <div onClick={()=>setOpenDialog(true)} className='p-14 py-24 flex justify-center rounded-lg items-center bg-gray-300 h-[280px] hover:scale-105 transition-all hover:shadow-medium cursor-pointer border-dash'>
                <PlusSquare />
            </div>
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            <p>Add a title for your resume</p>
                            <Input placeholder="Ex.full stack resume" 
                            className='my-2'
                            onChange = {(e)=>setResumeTitlt(e.target.value)}
                            ></Input>
                        </DialogDescription>


                        <div className='flex justify-end gap-5'>
                            <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
                            <Button 

                            disabled={!resumeTitle || loading}
                            onClick={()=>onCreate()}> {loading? <Loader2 className='animate-spin'/>: 'Create'}Create</Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddResume
