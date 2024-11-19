// api/questionService.ts
import axios, {AxiosResponse} from 'axios';
import {QUESTION_SERVICE_BASE_URL} from '../constants/quizim.ts';
import {Question} from "../types/Types.tsx";

export async function getQuestionById(
    id: number,
    baseUrl: string = QUESTION_SERVICE_BASE_URL
): Promise<Question> {
    if (!id || typeof id !== 'number') {
        throw new Error('Invalid ID: ID must be a positive number.');
    }

    try {
        const response: AxiosResponse<Question> = await axios.get(
            `${baseUrl}/posts/${id}`
        );
        return response.data;
    } catch (error) {
        console.error(`Error fetching question with ID ${id}:`, error);
        throw new Error('Failed to fetch question data.');
    }
}

