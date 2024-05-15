import styled from 'styled-components'

import {FaSearch} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

export const MusicPlaylistContainer = styled.div``

export const BannerImag = styled.div`
height: 300px;
width: 100%;
background-image: url("https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png");
background-size: cover;
display: flex;
flex-direction: column;
justify-content: flex-end;
color: #ffffff;
padding: 30px;
font-size: 25px;
`
export const SongsListAndSearchBtn = styled.div`
padding: 15px;
padding-left: 45px;
padding-right: 45px;
background-color: #152850;
`
export const HeadAndSearchBtn = styled.div`
color: #ffffff;
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`
export const SearchInputAndbtn = styled.div`
display: flex;
justify-content: space-around;
border-radius: 5px;
padding: 5px;
padding-left: 10px;
padding-right: 10px;
background-color: transparent;
width: 300px;
border: 1px solid #cbd5e1;
`
export const Input = styled.input`
color: grey;
background-color: transparent;
width: 90%;
border: none;
`
export const SearchBtn = styled.button`
cursor: pointer;
background-color: transparent;
width: 5%;
border: none;
margin-left: ${props => (props.marginLeft ? '15px' : null)};
color: ${props => props.color && '#ffffff'};
`
export const SearechIcon = styled(FaSearch)`
color: #cbd5e1;
`

export const UnorderedList = styled.ul`
list-style-type: none;
padding: 0px;
height: 300px;
overflow: auto;
`
export const ZeroDiv = styled.div`
height: 340px;
display: flex;
justify-content: center;
align-items: center;
color: #ffffff;
`

export const ListItem = styled.li`
margin-bottom: 20px;
display: flex;
justify-content: space-between;
color: #ffffff;
`

export const ThumbImage = styled.img`
width: 150px;
margin-right: 10px;
`

export const DeleteIcon = styled(MdDelete)`
font-size: 18px;
margin-right: 20px;
`
export const Para = styled.p`
font-size: ${props => props.fontSize};
font-weight: ${props => props.bold};
margin-top: 13px;
padding: 0px;
`

export const DisplayROwDiv = styled.div`
display: flex;
align-items: center;
`
