import React from 'react'
import FeaturedBlog from './FeaturedBlogs'
import './featuredbloglist.css'
import Grid from '@material-ui/core/Grid';


function FeaturedBlogList() {
    return (
        <Grid container spacing={10} className="featuredBlog">
            <Grid item xs={12} sm={4}>
                <FeaturedBlog/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <FeaturedBlog/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <FeaturedBlog/>
            </Grid>
        </Grid>
    )
}

export default FeaturedBlogList
