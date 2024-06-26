import express from 'express'
import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'
import { getStays, getStayById, addStay, updateStay, removeStay, addStayMsg, removeStayMsg } from './stay.controller.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get('/', log, getStays)
router.get('/:id', getStayById)
router.post('/', addStay)
router.put('/:id', updateStay)
router.delete('/:id', removeStay)

//ReActivate once we have users 

// router.post('/', requireAuth, addStay)
// router.put('/:id', requireAuth, updateStay)
// router.delete('/:id', requireAuth, removeStay)
// router.delete('/:id', requireAuth, requireAdmin, removeStay)

router.post('/:id/msg', requireAuth, addStayMsg)
router.delete('/:id/msg/:msgId', requireAuth, removeStayMsg)

export const stayRoutes = router


