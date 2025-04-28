import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLES}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable
          />
        </Tooltip>
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="Gandalf">
            <Avatar alt="Gandalf"
              src="https://static1.srcdn.com/wordpress/wp-content/uploads/2017/07/Sir-Ian-McKellen-as-Gandalf-The-Grey-The-Shire-Lord-of-the-Rings-Peter-Jackson.jpg"
            />
          </Tooltip>
          <Tooltip title="Arya">
            <Avatar alt="Arya"
              src="https://pyxis.nymag.com/v1/imgs/846/9bb/440e83edacba3579e42bb6ad20860b50b0-18-arya-stark.rsquare.w400.jpg"
            />
          </Tooltip>
          <Tooltip title="Bilbo">
            <Avatar alt="Bilbo"
              src="https://cdn.costumewall.com/wp-content/uploads/2018/10/bilbo-baggins.jpg"
            />
          </Tooltip>
          <Tooltip title="Goku">
            <Avatar alt="Goku"
              src="https://f8n-production.s3.amazonaws.com/creators/profile/qhhd8h2kd-songoku-png-az0y8z.png"
            />
          </Tooltip>
          <Tooltip title="Cổ Thiên Lạc">
            <Avatar alt="Cổ Thiên Lạc"
              src="https://image.phunuonline.com.vn/fckeditor/upload/2022/20220805/images/10-nam-qua-co-thien-lac-chi-_831659675187.jpg"
            />
          </Tooltip>
          <Tooltip title="Trịnh Thiếu Thu">
            <Avatar alt="Trịnh Thiếu Thu"
              src="https://iv1cdn.vnecdn.net/giaitri/images/web/2023/10/04/trinh-thieu-thu-tren-man-anh-1696392663.jpg?w=900&h=540&q=100&dpr=1&fit=crop&s=88JlqWLX3FfmwQfjfQhEKw"
            />
          </Tooltip>

          <Tooltip title="trungquandev">
            <Avatar alt="trungquandev"
              src="https://trungquandev.com/wp-content/uploads/2023/05/main-avatar-circle-min-trungquandev-codetq.jpeg"
            />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar alt="trungquandev"
              src="https://trungquandev.com/wp-content/uploads/2021/01/trungquandev-avatar-2021.jpg"
            />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar alt="trungquandev"
              src="https://trungquandev.com/wp-content/uploads/2018/04/trungquandev-avatar.jpeg"
            />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar alt="trungquandev"
              src="https://trungquandev.com/wp-content/uploads/2019/03/trungquandev-avatar-01-scaled.jpg"
            />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar alt="trungquandev"
              src="https://trungquandev.com/wp-content/uploads/2017/03/aboutme.jpg"
            />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar alt="trungquandev"
              src="https://trungquandev.com/wp-content/uploads/2019/06/trungquandev-cat-avatar.png"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
