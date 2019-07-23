/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Avatar } from 'jxnblk'
import { IoLogoTwitter as Twitter, IoLogoGithub as GitHub } from 'react-icons/io'

export default props =>
  <footer sx={{ py: 5 }}>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontSize: 14,
        maxWidth: 768,
        mx: 'auto',
        px: 3,
        a: {
          color: 'inherit',
          textDecoration: 'none',
          ':hover': {
            textDecoration: 'underline',
          }
        }
      }}>
      <div sx={{ ml: -3 }}>
        <Avatar size={32} color='currentcolor' />
      </div>
      <div sx={{ mx: 2 }}>
        <Styled.a href='https://jxnblk.com'>
          © 2019 Jxnblk
        </Styled.a>
      </div>
      <div sx={{ mx: 2 }}>
        <Styled.a href='https://github.com/jxnblk/blog'>
          GitHub
        </Styled.a>
      </div>
      <div sx={{ mx: 2 }}>
        Built with
        {' '}
        <Styled.a href='https://gatsbyjs.org'>
          Gatsby
        </Styled.a>
      </div>
      <div sx={{ mx: 'auto' }} />
      <div sx={{ mx: 2 }}>
        <a href='https://twitter.com/jxnblk'
          sx={{
            display: 'block',
            color: 'inherit',
            textDecoration: 'none',
            ':hover': {
              color: 'primary',
            }
          }}>
          <Twitter size={24} />
        </a>
      </div>
      <div sx={{ mx: 2 }}>
        <a href='https://github.com/jxnblk'
          sx={{
            display: 'block',
            color: 'inherit',
            textDecoration: 'none',
            ':hover': {
              color: 'primary',
            }
          }}>
          <GitHub size={24} />
        </a>
      </div>
    </div>
  </footer>

