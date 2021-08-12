import React from 'react'
import { Link } from 'react-router-dom'

const ExternalLink = ({ link, content }) => {
    return (
        <Link to={{ pathname: link }} target='_blank' className="link">{content}</Link>
    )
}

export default ExternalLink
