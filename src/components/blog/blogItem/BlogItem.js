import { Card, CardContent, CardHeader } from '@material-ui/core'
import React from 'react'
import './BlogItem.css'

export default function BlogItem({title, description}) {
    return (
        <Card className="BlogItem">
            <CardHeader className="blog-header" title={title} >
                
            </CardHeader>

            <CardContent className="blog-content">
                {description}
            </CardContent>

        </Card>
    )
}
