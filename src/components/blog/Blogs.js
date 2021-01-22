import React from 'react'
import SectionHeader from '../sectionHeader/SectionHeader';
import BlogItem from './blogItem/BlogItem';
import './Blogs.css';

export default function Blogs() {

    const blogs = [
        {
            title : "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title : "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title : "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]


    return (
        <div id="blogs" className="Blogs">
            <SectionHeader title="Blogs"/>
            <div className="blog-items">
                {blogs.map( (item, index) => {
                    return(<BlogItem className="blogs-item" title={item.title} description={item.description} key={index}/>);
                })}
            </div>
            
        </div>
    )
}
