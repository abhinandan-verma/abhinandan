import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/MovingBorders'
import MagicButton from './MagicButton'
import { FaFileDownload } from 'react-icons/fa'
  
function Resume() {
  return (
      <Card>
            <CardHeader>
                <CardTitle>My Resume</CardTitle>
            </CardHeader>
            <CardContent className='flex justify-around px-10 py-6 bg-indigo-200 bg-opacity-10 rounded-xl'>
              <Image
                  src={'/drive.png'}
                  alt='resume'
                  width={70}
                  height={50}
              />

              <Link href="https://drive.google.com/file/d/1_XwSViw0e23X8ynY6_yBUCNehVDzvZHU/view" download={''}>
                  <MagicButton
                      title='Download Resume'
                      position='right'
                      icon={<FaFileDownload/>}
                  />
            </Link>
            </CardContent>
      </Card>
  )
}

export default Resume