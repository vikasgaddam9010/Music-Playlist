import {Component} from 'react'

import {
  MusicPlaylistContainer,
  BannerImag,
  SongsListAndSearchBtn,
  SearchInputAndbtn,
  Input,
  SearchBtn,
  HeadAndSearchBtn,
  SearechIcon,
  UnorderedList,
  ListItem,
  ThumbImage,
  DeleteIcon,
  DisplayROwDiv,
  Para,
  ZeroDiv,
} from './Css'

class MusicPlaylist extends Component {
  state = {
    inputText: '',
    songsLisst: this.props.initialTracksList,
  }

  onChangeinputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickToSearch = () => {
    const {inputText} = this.state
    const {initialTracksList} = this.props

    const newList = initialTracksList.filter(each =>
      each.name.toLowerCase().includes(inputText.toLowerCase()),
    )

    this.setState({songsLisst: newList})
  }

  removeSOngFromPlaylist = id => {
    const {songsLisst} = this.state

    const newListAfterDelete = songsLisst.filter(each => each.id !== id)
    console.log(newListAfterDelete)
    this.setState({songsLisst: newListAfterDelete})
  }

  renderSongsView = () => {
    const {songsLisst} = this.state
    return (
      <UnorderedList>
        {songsLisst.map(each => {
          const getID = () => {
            this.removeSOngFromPlaylist(each.id)
          }

          return (
            <ListItem key={each.id}>
              <DisplayROwDiv>
                <ThumbImage alt="track" src={each.imageUrl} />
                <div>
                  <p>{each.name}</p>
                  <p>{each.genre}</p>
                </div>
              </DisplayROwDiv>
              <DisplayROwDiv outline>
                <Para>{each.duration}</Para>
                <SearchBtn
                  data-testid="delete"
                  onClick={getID}
                  color
                  marginLeft="10px"
                >
                  <DeleteIcon />
                </SearchBtn>
              </DisplayROwDiv>
            </ListItem>
          )
        })}
      </UnorderedList>
    )
  }

  zeroSongsView = () => {
    return (
      <ZeroDiv>
        <Para bold="bold" fontSize="30px">
          No Songs Found
        </Para>
      </ZeroDiv>
    )
  }

  render() {
    const {inputText, songsLisst} = this.state

    return (
      <MusicPlaylistContainer>
        <BannerImag>
          <h1>Ed Sheeran</h1>
          <Para>Singer</Para>
        </BannerImag>
        <SongsListAndSearchBtn>
          <HeadAndSearchBtn>
            <h1>Songs Playlist</h1>
            <SearchInputAndbtn>
              <Input
                value={inputText}
                onChange={this.onChangeinputText}
                type="search"
                placeholder="Search"
              />
              <SearchBtn onClick={this.onClickToSearch}>
                <SearechIcon />
              </SearchBtn>
            </SearchInputAndbtn>
          </HeadAndSearchBtn>
          {songsLisst.length === 0
            ? this.zeroSongsView()
            : this.renderSongsView()}
        </SongsListAndSearchBtn>
      </MusicPlaylistContainer>
    )
  }
}

export default MusicPlaylist
