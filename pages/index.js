import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
  return (
    <div>
      <CSSReset />
      <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </div>
  )
}

export default HomePage

const StyledHeader = styled.div`
  img {
    width: 80px;
    heigt: 80px;
    border-radius: 50%
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-itens: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px
  }
`
function Header() {
  return (
    <StyledHeader>
      <img src="banner" />

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.description}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline(props) {
  const playlistsNames = Object.keys(props.playlists)

  return (
    <StyledTimeline>
      {playlistsNames.map(playlistsName => {
        const videos = props.playlists[playlistsName]

        return (
          <section>
            <h2>{playlistsName}</h2>
            <div>
              {videos.map(video => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
