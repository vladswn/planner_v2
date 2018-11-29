using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Planner.ServiceInterfaces.DTO;
using Planner.ServiceInterfaces.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Planner.Controllers
{
  [Route("api/Publication")]
  public class PublicationController : GenericController
  {

    IHostingEnvironment hostingEnvironment;
    public PublicationController(IServiceFactory _serviceFactory, IMapper mapper, IHostingEnvironment _hostingEnvironment) : base(_serviceFactory, mapper)
    {
      hostingEnvironment = _hostingEnvironment;
    }


    [HttpGet]
    [Route("GetNMBDs")]
    public IActionResult GetNMBDs()
    {
      IEnumerable<NmbdDTO> result = serviceFactory.PublicationService.GetAllNmbds();
      return Ok(result);
    }

    [HttpPost, DisableRequestSizeLimit]
    public ActionResult UploadFile()
    {
      String fileName = "";
      IFormFile file = Request.Form.Files[0];
      String path = Path.Combine(hostingEnvironment.WebRootPath, "publication_files");

      if (file.Length > 0)
      {
        fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
        string fullPath = Path.Combine(path, fileName);
        using (var stream = new FileStream(fullPath, FileMode.Create))
        {
          file.CopyTo(stream);
        }
      }
      return Json(fileName);
    }
  }
}
