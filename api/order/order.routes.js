import express from 'express'
import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'
import { getOrders, getOrderById, addOrder, updateOrder, removeOrder, addOrderMsg, removeOrderMsg, getOrderByUserId } from './order.controller.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get('/', log, getOrders)
router.get('/:id', getOrderById)
router.get('/user/:id', getOrderByUserId)
router.post('/', addOrder)
router.put('/:id', updateOrder)
router.delete('/:id', removeOrder)

//ReActivate once we have users
// router.post('/', requireAuth, addOrder)
// router.put('/:id', requireAuth, updateOrder)
// router.delete('/:id', requireAuth, removeOrder)
// router.delete('/:id', requireAuth, requireAdmin, removeOrder)

router.post('/:id/msg', requireAuth, addOrderMsg)
router.delete('/:id/msg/:msgId', requireAuth, removeOrderMsg)

export const orderRoutes = router
