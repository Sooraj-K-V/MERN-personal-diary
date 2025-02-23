import express from "express";
import { getUserJournals, addUserJournals, updateJournal, deleteJournal } from "../controllers/journalController.js";
import { authenticate } from "../middleware/authMiddleware.js"; // Import authentication middleware

const router = express.Router();

// Get journals only for the logged-in user
router.get("/crud-journals", authenticate, getUserJournals);
router.post("/crud-journals", authenticate, addUserJournals)
router.put("/crud-journals/:journalId", authenticate, updateJournal);
router.delete("/crud-journals/:journalId", authenticate, deleteJournal);

export default router;
 