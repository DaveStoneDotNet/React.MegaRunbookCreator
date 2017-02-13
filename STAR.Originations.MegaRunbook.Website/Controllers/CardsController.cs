//using System;
//using System.Collections.Concurrent;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web.Http;

//using STAR.Originations.MegaRunbook.Website.Models;

//namespace STAR.Originations.MegaRunbook.Website.Controllers
//{
//    [System.Web.Http.RoutePrefix("api/cards")]
//    public class CardsController : ApiController
//    {
//        private static readonly ConcurrentDictionary<long, CardData> CardDataDict = new ConcurrentDictionary<long, CardData>( CardData.SeedData().ToDictionary(x => x.id));
//        private static readonly ConcurrentDictionary<String, CourseData> CourseDataDict = new ConcurrentDictionary<String, CourseData>(CourseData.SeedData().ToDictionary(x => x.id));

//        // GET: api/cards
//        public IEnumerable<CardData> Get()
//        {
//            return CardDataDict.Values;
//        }

//        // GET: api/cards/5
//        public IHttpActionResult Get(long id)
//        {
//            CardData value = null;
//            return CardDataDict.TryGetValue(id, out value) ? (IHttpActionResult)Ok(value) : NotFound();

//        }

//        // POST: api/cards
//        public IHttpActionResult Post([FromBody]CardData value)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (CardDataDict.TryAdd(value.id, value))
//                return Ok(value);

//            return Conflict();

//        }

//        // PUT: api/cards/5
//        public IHttpActionResult Put(long id, [FromBody]CardData value)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (!CardDataDict.ContainsKey(id))
//                return NotFound();

//            //KanBan React code has two calls to PUT cards/id:
//            if (value.id != 0)
//                //1. Full update: We assume the call is a full update if id on value is filled in.
//                CardDataDict[id] = value;
//            else if (!string.IsNullOrEmpty(value.status))
//            {
//                //2. Update status only: If the id of the value is zero and the status is given then we only update the status
//                CardDataDict[id].status = value.status;
//            }

//            return Ok(CardDataDict[id]);
//        }

//        // DELETE: api/cards/5
//        public IHttpActionResult Delete(long id)
//        {
//            CardData value = null;
//            if (CardDataDict.TryRemove(id, out value))
//                return Ok();

//            return NotFound();
//        }

//        //------------------------------------------------------------------
//        // Tasks
//        //------------------------------------------------------------------

//        // POST: api/cards/5/tasks
//        [System.Web.Http.HttpPost, System.Web.Http.Route("{cardId}/tasks")]
//        public IHttpActionResult AddTask(long cardId, [FromBody]TaskData taskData)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            CardData value = null;
//            if (!CardDataDict.TryGetValue(cardId, out value))
//                return NotFound();

//            value.tasks.Add(taskData);

//            return Ok(taskData);
//        }

//        // PUT: api/cards/5/tasks
//        [System.Web.Http.HttpPut, System.Web.Http.Route("{cardId}/tasks/{taskId}")]
//        public IHttpActionResult UpdateTaskDone(long cardId, long taskId, [FromBody]TaskData taskData)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            CardData value = null;
//            if (!CardDataDict.TryGetValue(cardId, out value))
//                return NotFound();

//            var taskToUpdate = value.tasks.SingleOrDefault(x => x.id == taskId);
//            if (taskToUpdate == null)
//                return NotFound();

//            taskToUpdate.done = taskData.done;

//            return Ok(taskToUpdate);
//        }

//        // DELETE: api/cards/5/tasks
//        [System.Web.Http.HttpDelete, System.Web.Http.Route("{cardId}/tasks/{taskId}")]
//        public IHttpActionResult DeleteTask(long cardId, long taskId)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            CardData value = null;
//            if (!CardDataDict.TryGetValue(cardId, out value))
//                return NotFound();

//            var taskToDelete = value.tasks.SingleOrDefault(x => x.id == taskId);
//            if (taskToDelete == null)
//                return NotFound();

//            value.tasks.Remove(taskToDelete);

//            return Ok(value);
//        }

//        //------------------------------------------------------------------
//        // Courses
//        //------------------------------------------------------------------

//        // GET: api/courses
//        [System.Web.Http.HttpGet]
//        public IEnumerable<CourseData> GetGourses()
//        {
//            return CourseDataDict.Values;
//        }
//    }
//}
